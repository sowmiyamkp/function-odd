//odd
	
	let array=[3,5,7],sum=0,count=0;
	 
	function odd(array)
	{
	 
	for(i=0;i<array.length;i++)
	{
		if(array[i]%2!=0)
		{
		sum+=array[i];
	count++;
	}
	}
	
	return sum/count;
	}
	console.log(odd(array));
	

	var odd=[1,2,3,4,5]
	for(i=0;i<odd.length;i++)
	{
		if(odd[i]%2!=0){
			console.log(odd[i]);
		}
	}