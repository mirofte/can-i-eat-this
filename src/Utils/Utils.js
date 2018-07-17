export const prepareUrlFromFilters = filters => {
	let url = '';
	
	if(typeof filters !== undefined){
		for(let filter in filters){
			if(filters[filter]){
				url += '&' + filter + '_like=' + filters[filter];
			}
		}
	}
	
	return url;
}