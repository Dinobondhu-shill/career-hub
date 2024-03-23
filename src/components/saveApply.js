const getStoredApplication =() =>{
  const storedApplication = localStorage.getItem("get-application")
  if(storedApplication){
    return JSON.parse(storedApplication)

  }else{
    return []
  }
}

const saveApplication = (id) =>{
  const storeJObApplication = getStoredApplication();
  const exists = storeJObApplication.find(jobId=>jobId === id)
  if(!exists){
    storeJObApplication.push(id);
    localStorage.setItem('get-application', JSON.stringify(storeJObApplication))
  }
}
export {getStoredApplication, saveApplication}