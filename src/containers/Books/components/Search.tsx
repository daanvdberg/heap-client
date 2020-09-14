import React, { ComponentType, useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
	Box, FormControl, InputLabel, Select, MenuItem, InputBase, Paper, IconButton, Divider
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookList from '../../../components/BookList';
import { RootState } from '../../../store/reducers';
import { actions as BookActions } from '../../BookProvider/actions';
import { makeSelectSearchResults } from '../../BookProvider/selectors';
import { BookData, BookQuery, BookType } from '../../BookProvider/types';

const styles = makeStyles(({ spacing, typography }: Theme) =>
	createStyles({
		searchForm: {
			display: 'flex',
			alignItems: 'center',
			width: '100%'
		},
		formControl: {
			marginLeft: spacing(2),
			flex: 1
		},
		typeField: {
			padding: spacing(1, 1.25)
		},
		typeSelect: {
			fontSize: typography.caption.fontSize
		},
		divider: {
			height: 54
		},
		submit: {
			width: 54,
			height: 54,
			padding: spacing(2),

		}
	})
);

function Search({ results, searchBooks, resetResults, match: { params }, history }: Props) {

	const c = styles();

	const { register, handleSubmit, setValue, watch } = useForm<BookQuery>();
	const query = watch('query');
	const [type, setType] = useState<BookType>(params.type || 'title');

	useEffect(() => {
		if (params.query) {
			setValue('query', params.query);
			setType(params.type);
			searchBooks(params.query, params.type || type);
		} else {
			setValue('query', '');
		}
	}, []);

	useEffect(() => {
		if (params.query) {
			searchBooks(params.query, params.type || type);
		}
		return () => resetResults();
	}, [params]);

	const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => setType(event.target.value as BookType);

	const onSubmit = (data: BookQuery) => history.push(`/books/${type}/${encodeURIComponent(data.query)}`);

	return (
		<Box p={2} pb={8}>
			<form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
				<Paper className={c.searchForm}>
					<InputBase
						className={c.formControl}
						name='query'
						placeholder='Search Books'
						inputProps={{ 'aria-label': 'search books' }}
						inputRef={register}
					/>
					<FormControl className={c.typeField} variant='outlined' size='small'>
						<Select
							id='searchType'
							labelId='type-label'
							className={c.typeSelect}
							value={type}
							onChange={handleChangeType}
						>
							<MenuItem value='title'>Title</MenuItem>
							<MenuItem value='author'>Author</MenuItem>
						</Select>
					</FormControl>
					<Divider className={c.divider} orientation='vertical' />
					<IconButton type='submit' aria-label='submit search' className={c.submit} onClick={handleSubmit(onSubmit)}>
						<FontAwesomeIcon icon={['fal', 'search']} size='xs' />
					</IconButton>
				</Paper>
			</form>

			<Box py={3}>
				<BookList books={results} query={query} />
			</Box>

		</Box>
	);
}

interface StateFromProps {
	results: BookData[]
}

interface DispatchFromProps {
	searchBooks: (query: string, type: BookType) => void
	resetResults: () => void
}

type Props = StateFromProps & DispatchFromProps & RouteComponentProps<BookQuery>

const mapStateToProps = createStructuredSelector<RootState, StateFromProps>({
	results: makeSelectSearchResults()
});

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
	return {
		searchBooks: (query, type) => dispatch(BookActions.searchBooks(query, type)),
		resetResults: () => dispatch(BookActions.setResults([]))
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default withRouter(withConnect(Search) as ComponentType<any>);