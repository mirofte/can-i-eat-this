export const prepareUrlFromFilters = filters => {
	let url = '';
	
	if(typeof filters !== undefined){
		for(let filter in filters){
			if(filters[filter]){
				switch(filter){
					case 'name':
						url += '&q=' + filters[filter];
					break;
					default:
						url += '&' + filter + '_like=' + filters[filter];
					break;
				}
			}
		}
	}
	
	return url;
}