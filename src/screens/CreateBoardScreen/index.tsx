import React from 'react';
import CreateSelector from './CreateSelector';
import {Text} from 'react-native';
import CreateInput from './CreateInput';
import CreateInputKeyword from './CreateInputKeyword';
import CreateMultipleInput from './CreateMultipleInput';

export default function () {
  return (
    <>
      <Text>년도 선택 *</Text>
      <CreateSelector
        title="어떤 년도와 관련된 캡슐인가요?"
        list={['1980', '1990', '2000']}
      />
      <Text>주제 선택 *</Text>
      <CreateSelector
        title="어떤 내용으로 만드시나요?"
        list={['음악', '패션', '패션', '패션', '패션']}
      />
      <Text>글쓰기 *</Text>
      <CreateInput title="제목 : " />
      <CreateInputKeyword title="원하시는 키워드를 입력하면 대신 써드려요!" />
      <CreateMultipleInput title="본문 : " />
      <Text>노래 추가</Text>
      <CreateInput title="요즘 듣고 있는 노래를 입력해주세요!" />
      <Text>친구 태그하기</Text>
      <CreateInput title="요즘 듣고 있는 노래를 입력해주세요!" />
    </>
  );
}