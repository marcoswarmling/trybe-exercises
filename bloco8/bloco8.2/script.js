const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  const verifyEven = (email) => email == 'roberta@email.com';
  const isEven = emailListInData.find(verifyEven);
console.log(isEven)

  // const showEmailList = (email) => {
  //   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  // };

  // emailListInData.forEach((item, tempo) => {
  //  showEmailList(item)
  //  console.log(tempo)
  // })

  