import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const TestUseRef = () => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');

  const field1Ref = useRef(null);
  const field2Ref = useRef(null);
  const field3Ref = useRef(null);
  const scrollRef = useRef(null);

  const style = {
    margin: 10,
    height: 40,
    backgroundColor: 'grey',
    color: 'white',
  };

  const renderForm = () => {
    return (
      <>
        <TextInput
          ref={field1Ref}
          value={field1}
          onChangeText={changedText => {
            setField1(changedText);
          }}
          placeholder="Field 1"
          style={style}
        />
        <TextInput
          ref={field2Ref}
          value={field2}
          onChangeText={changedText => {
            setField2(changedText);
          }}
          placeholder="Field 2"
          style={style}
        />
        <TextInput
          ref={field3Ref}
          value={field3}
          onChangeText={changedText => {
            setField3(changedText);
          }}
          placeholder="Field 3"
          style={style}
        />

        <TouchableOpacity
          style={[style, {backgroundColor: 'pink'}]}
          onPress={() => {
            field1Ref.current.clear();
            field2Ref.current.clear();
            field3Ref.current.clear();
          }}>
          <Text>Clear all</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style, {backgroundColor: 'pink'}]}
          onPress={() => {
            field1Ref.current.focus();
          }}>
          <Text>Focus on 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style, {backgroundColor: 'pink'}]}
          onPress={() => {
            field2Ref.current.focus();
          }}>
          <Text>Focus on 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style, {backgroundColor: 'pink'}]}
          onPress={() => {
            field3Ref.current.focus();
          }}>
          <Text>Focus on 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style, {backgroundColor: 'pink'}]}
          onPress={() => {
            scrollRef.current.scrollToEnd();
          }}>
          <Text>Scroll to end</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView ref={scrollRef}>
        {renderForm()}
        {renderForm()}
        {renderForm()}
      </ScrollView>
    </View>
  );
};

export default TestUseRef;
