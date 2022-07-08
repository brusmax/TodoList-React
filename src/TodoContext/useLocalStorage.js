import React from "react"

function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [item, setItem] = React.useState(initialValue)
  React.useEffect(()=>{
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItems 

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = initialValue
        }else{
          parsedItems = JSON.parse(localStorageItem)
        }

        setItem(parsedItems)
        setLoading(false)
      }catch(e){
        console.error(e)
        setError(e)
      }

    }, 1000)
  })

  

  const saveItem = (newItem) => {
    try{
      let stringItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringItem)
      setItem(newItem)
    }catch(e){
      setError(e)
    }
    
  }
  return {
    item,
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage }