import * as React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {View, StyleSheet, Button} from 'react-native';

import BcpText from './BcpText';

const myErrorHandler = (error) => {
  console.log(error);
};

function ErrorFallback({resetErrorBoundary}) {
  return (
    <View style={[styles.container]}>
      <View>
        <BcpText> Something went wrong: </BcpText>
        <Button title="try Again" onPress={resetErrorBoundary} />
      </View>
    </View>
  );
}

const ErrorHandler = ({children}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
      {children}
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 12,
  },
});

export default ErrorHandler;
