import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Title from './Title';

const MOVIES = gql`
	query MyQuery {
		movie(limit: 50, offset: 0) {
			id
			title
			original_title
			poster_path
			genreByGenre {
				name
			}
		}
	}
`;

export default function Movies() {
	const {loading, error, data} = useQuery(MOVIES);
	
	console.log(error);
	if(loading) return <p>Cargando ...</p>
	if(error) return <p>Error</p>

	return (
		<div className='p-10'>
			<Title title="Movies" />
			<div className='grid grid-cols-3 gap-4'>
				{data.movie.map(({id, title, original_title, poster_path, genreByGenre})=>{
					return (
						<div key={id} className='rounded-md bg-gray-100 my-5 shadow-md m-auto p-5 w-80 h-96 flex 
												transform duration-300 ease-in-out hover:-translate-y-3 hover:bg-gray-300'>
							<div className='mb-0 m-auto ml-0 flex flex-col w-full h-full'>
								<div className='w-full h-full bg-gray-500 bg-cover' 
										style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original${poster_path}`}}>
								</div>
								<h2 className='font-bold text-lg'>{title}</h2>
								<label>{original_title}</label>
								<div className='bg-gray-500 rounded-full w-auto max-w-max px-3 flex mt-2'>
									<label className='m-auto text-white'>{genreByGenre.name}</label>
								</div>
							</div>
						</div>
					);
				})}	
			</div>
		</div>
	)
}
