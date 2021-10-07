import React, {useState, useEffect} from 'react';
import { View , Text} from 'react-native';



const FixedDimensionsBasics = () => {
    const [dat, setCount] = useState(0);
    const url = 'http://192.168.0.5:8000/auth/login'
    
    const getMoviesFromApi = (url) => {
      return fetch(url)
        .then((response) => {
            return response.json()})
        .then((json) => {
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
    };
      const receiving = async (url) => {
        const data = await getMoviesFromApi(url)
        return data
      }
    useEffect(() => {
      receiving(url).then((d) => {
        console.log(d)
        setCount(d)
      })
    }, [])
    /*useEffect(() => {

        setCount(dataHandling())
    },[])*/
    
  return (
    <View>
        <Text>
     {JSON.stringify(dat)}
     </Text>
    </View>
  );
};

export default FixedDimensionsBasics;