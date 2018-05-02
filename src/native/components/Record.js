import React from 'react';
import { Container, Content, Text, H1, H2, H3, Button } from 'native-base';
import Spacer from './Spacer';


import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

//import Camera from 'react-native-camera';


const onPress = item => Actions.recipe({ match: { params: { id: String(item.id) } } });
const Record = () => (
  <Container>
    <Content padder>
      <Spacer size={30} />
      <H1>Camera</H1>
	     <Button
                    block
                    bordered
                    small
                    onPress={() => onPress(item)}
                  >
				  <Text>Record Memories</Text>
		</Button>
{/*
 
  <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />*/}

</Content>
  </Container>
);

export default Record;
