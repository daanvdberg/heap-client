import React, { Fragment, useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { BookQuery } from '../BookProvider/types';
import MyBooks from './components/MyBooks';
import Search from './components/Search';
import Toolbar from './components/Toolbar';

export enum BookSection { myBooks, search }

function Books({ match: { params } }: Props) {

	const [section, setSection] = useState<BookSection>(BookSection.myBooks);

	useEffect(() => {
		if (params.query) {
			setSection(BookSection.search);
		}
	}, []);

	const handleTabChange = (tab: BookSection) => setSection(tab);

	return (
		<Fragment>

			<Toolbar tab={section} changeTab={handleTabChange} />

			{section === BookSection.myBooks && <MyBooks />}

			{section === BookSection.search && <Search />}

		</Fragment>
	);
}

type Props = RouteComponentProps<BookQuery>

export default withRouter(Books);