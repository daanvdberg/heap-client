import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BookData } from '../containers/BookProvider/types';
import { Api, apiConfig } from '../utils/Api';

class BookApi extends Api {
	public constructor(config: AxiosRequestConfig) {
		super(config);

		this.searchBooks = this.searchBooks.bind(this);
		this.saveBook = this.saveBook.bind(this);
	}

	/**
	 * Search for books via 3rd-party API
	 * @returns {Promise} searchBooks - search books
	 */
	public searchBooks(query: string, type: 'title' | 'author'): Promise<BookData[]> {
		// TODO - Validation
		return this.get<BookData[]>(
			`/book/search?${type}=${encodeURIComponent(query)}`
		).then((response: AxiosResponse) => {
			const { data } = response;

			const state: BookData[] = data;

			return state;
		}).catch((error: AxiosError) => {
			throw error;
		});
	}

	/**
	 * Save a book in your personal list
	 * @returns {Promise} saveBook - save book
	 */
	public saveBook(book: BookData): Promise<BookData> {
		return this.post<any>(`/book`, JSON.stringify(book)).then((response: AxiosResponse) => {
			const { data } = response;

			console.log(data);

			return data;
		}).catch((error: AxiosError) => {
			throw error;
		});
	}
}

export const bookApi = new BookApi(apiConfig);