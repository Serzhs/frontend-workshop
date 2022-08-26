import React, {useState} from 'react';
import {Heading, Heading2, Container, PromoText} from './styles'
import {Button, showToast, Flex} from "@lokalise/louis";

// We are using Typescript so we need to tell what kind of data this component can receive
type HomeProps = {
  title: string
}

// each component can receive data from parent, they are called properties (props),
// in this case we have only one property: "title"
// by adding :HomeProps we are telling what kind of data type "title" is, in this case it is string
const Home = ({ title }: HomeProps) => {
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
       {/*{title} - passing title data from javascript to HTML */}
       This is a home page with title: {title}
     </Heading>
      <Heading2>
        Lets count! Count is: {count}

        {count > 10 && <PromoText>We are above 10 now :)</PromoText>}
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
