import React from 'react'

export const fetchData = async () =>{
	const mdata = await fetch("https://instagram85.p.rapidapi.com/account/25945306/followers", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "instagram85.p.rapidapi.com",
		"x-rapidapi-key": "7691e99b3emsh776e353679ce405p1edcfbjsnb309ee8f68fe"
	}
})
.then(response => {
	console.log('res', response.json());
})
.catch(err => {
	console.error(err);
});
return mdata
console.log('dfx', mdata);
}