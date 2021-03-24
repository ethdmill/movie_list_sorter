const listToLowercase = (list) => {
  // for (let i = 0; i < list.length; i++) {
  //   list[i].toLowercase()
  // }
  const lowercaseList = list.map(title => 
    title.toLowerCase()
  )
  // console.log(list)
  console.log(lowercaseList)
  return (
    <div>
      {lowercaseList}
    </div>
  )
}

export default listToLowercase