import { all, takeLeading, takeEvery, call, put } from 'redux-saga/effects';
import { bookApi } from '../../api/book';
import { SaveBook, constants, SearchBooks } from './types';
import { actions as BookActions } from './actions';

/**
 * Search for books
 */
export function* handleSearchBooks(action: SearchBooks) {
	const { query, type } = action.payload
	try {

		const results = yield call(bookApi.searchBooks, query, type);
		
		if (results && results.length) {
			yield put(BookActions.setResults(results))
		}

	} catch (err) {
		console.log('Error: ', err);
	}
}

/**
 * Search for books
 */
export function* handleSaveBook(action: SaveBook) {
	const { book, status } = action.payload;
	try {

		const data = { ...book, status };

		console.log(data);

		const results = yield call(bookApi.saveBook, data);

		console.log(results);

	} catch (err) {
		console.log('Error: ', err);
	}
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
	yield all([
		takeLeading(constants.SEARCH_BOOKS, handleSearchBooks),
		takeEvery(constants.SAVE_BOOK, handleSaveBook)
	]);
}