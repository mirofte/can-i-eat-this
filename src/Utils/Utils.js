export const prepareQuery = options => {
	
	let query 	= '';
	let filters = '';
	if(typeof options !== undefined){
		if(options.filters){
			
			filters += '(';

			for(let filterKey in options.filters){
				let value = options.filters[filterKey];	
				if(options.filters[filterKey] !== undefined){
					if(typeof value === 'string'){
						value = `"${value}"`;
					}
					filters += `${filterKey} : ${value},`;
				}
			}
			filters = filters.slice(0, -1);
			if(filters){
				filters += ')';
			}
		}
		query = `
			query {
				${options.type}${filters}{
					${options.fields}
				}
			}
			`;
	}
	
	return query;
}