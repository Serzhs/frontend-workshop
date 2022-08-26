import React, {useState} from 'react';
import {Heading, Heading2, Container} from './styles'
import {Button, showToast, Flex} from "@lokalise/louis";

const Home = () => {
  // count is a state,
  // setCount is a function how to change the state
  // 0 in useState represents start value
  const [count, setCount] = useState(0)

  // addCountByOne is a function who is responsible for adding a count
  const addCountByOne = () => {
    // We are creating variable with value of next count
    const nextCount = count + 1

    // if nextCount equals 10 then we show a success toast
    if(nextCount === 10) {
      showToast({
        type: 'success',
        title: `Wow we reached 10 already!`
      })
    }

    // change state to nextCount, to trigger HTML re-draw
    setCount(nextCount)
  }

  const clearCount = () => {
    setCount(0)
  }

  return (
    <Container>
     <Heading>
       This is heading of Frontend workshop
     </Heading>
      <Heading2>
        Lets count! Count is: {count}
      </Heading2>

      <Flex gap={2}>
        <Button appearance="primary" onClick={addCountByOne}>
          Add + 1
        </Button>
        <Button appearance="primary" variant="outline" onClick={clearCount}>
          Clear
        </Button>
      </Flex>

    </Container>
  );
};

export default Home;
