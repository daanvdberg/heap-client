import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actions as BookActions } from '../../containers/BookProvider/actions';
import { BookData, BookStatus } from '../../containers/BookProvider/types';
import BookCover from '../BookCover';

const styles = makeStyles(
	createStyles({
		rating: {
			display: 'flex'
		}
	})
);

function BookItem({ book, saveBook }: Props) {

	const c = styles();

	const handleSaveBook = (status = BookStatus.WantToRead) => () => saveBook(book, status);

	return (
		<Grid container spacing={2}>
			<Grid item xs='auto' style={{ width: 90 }}>
				<BookCover size='small' image={book.images} />
			</Grid>
			<Grid item xs>
				<Box pb={1}>
					<Typography component='div' variant='body2' title={book.title}>
						<LinesEllipsis
							text={book.title}
							maxLine='3'
							ellipsis='...'
							trimRight
							basedOn='words'
						/>
					</Typography>
					{book.author && <Typography variant='caption'>by {book.author}</Typography>}
				</Box>
				<Grid container alignItems='center'>
					<Box ml={-0.25} mt={-0.125}>
						<Rating name='rating' value={book.rating} readOnly size='small' className={c.rating} />
					</Box>
					<Box>&nbsp;&nbsp;<Typography variant='caption'>{book.rating || 0}</Typography></Box>
					<Box pl={1.25}>
						<Typography variant='caption'>
							—&nbsp;&nbsp;&nbsp;{book.ratingCount || 0} {book.ratingCount === 1 ? 'rating' : 'ratings'}
						</Typography>
					</Box>
				</Grid>
				<Box pt={1}>
					<ButtonGroup variant='contained' color='primary' size='small' aria-label='book action'>
						<Button onClick={handleSaveBook()}>Want to Read</Button>
						<Button>
							<FontAwesomeIcon icon={['fas', 'caret-down']} fixedWidth />
						</Button>
					</ButtonGroup>
				</Box>
			</Grid>
		</Grid>
	);
}

interface DirectProps {
	book: BookData
}

interface DispatchFromProps {
	saveBook: (book: BookData, status: BookStatus) => void
}

type Props = DirectProps & DispatchFromProps

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
	return {
		saveBook: (book, status) => dispatch(BookActions.saveBook(book, status))
	};
}

const withConnect = connect(
	null,
	mapDispatchToProps
);

export default withConnect(BookItem);