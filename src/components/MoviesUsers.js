import { useSubscription } from '@apollo/client';
import gql from 'graphql-tag'
import React from 'react'
import Title from './Title';

const USERS = gql`
subscription{
  Users(limit: 20) {
    id_user
    name
	created_at
  }
}
`;

export default function MoviesUsers() {
	const {loading, error, data} = useSubscription(USERS);

	console.log(error);
	if(loading) return <p>Cargando ...</p>
	if(error) return <p>Error</p>

	return (
		<div className='p-10 pt-20'>
			<Title title="Usuarios" />
			<div >
				{data.Users.map(({id_user, name, created_at, poster_path})=>{
					return (
						<div key={id_user} className='rounded-md bg-gray-100 my-5 shadow-md m-auto p-5 w-full  flex'>
							<div className='mb-0 m-auto ml-0'>
								<h2 className='font-bold text-lg'>{name}</h2>
								<label>Creation Date: {created_at}</label>
							</div>
						</div>
					);
				})}			
			</div>
		</div>
	)
}
