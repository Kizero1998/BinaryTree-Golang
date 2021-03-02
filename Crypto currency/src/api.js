export const fetchData = async () => {
  try {

    const response = await fetch("https://crypto.mobilelab.vn/v1/cryptotrading/setting/coins" )
    const data = await response.json(); 
    // .then(response => response.json()).then(data => console.log(data));

    console.log(data);
    return data;

    // const [data1, data2] = await Promise.all([
    // (await fetch('https://crypto.mobilelab.vn/v1/cryptotrading/setting/coins')).json().then(data1=>{console.log(data1)}),
    // (await fetch('https://crypto.mobilelab.vn/v1/cryptotrading/setting/markets')).json().then(data2=>{console.log(data2)})
    //                                         ])
    //   return data1, data2;

    // const data = await Promise.all([
    //   fetch('https://crypto.mobilelab.vn/v1/cryptotrading/setting/coins')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //                                 ])


      }catch(e){console.log(e);}
        };

