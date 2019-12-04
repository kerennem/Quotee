import React from 'react';
import {useParams} from 'react-router-dom'

function Child() {
  const { childId } = useParams();
  return (
    <div>{childId}'s page</div>
  )
}


export default Child;
