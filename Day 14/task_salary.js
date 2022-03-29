let salaries={   "anuj":20000,   "sunil": 30000, "rahul": 25000};  
 function tosalary(salaries){
  
        let maxsal=0;
        let hname="null";

        for(let name in salaries){
        if(salaries[name]>maxsal){
            maxsal=salaries[name];
            hname=name;
        } 
        }
       console.log(`${hname}`);
      
 }
 tosalary(salaries);
