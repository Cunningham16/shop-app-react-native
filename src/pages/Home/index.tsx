import { View, StyleSheet, Text } from "react-native"
import { Outline } from "shared/ui/Buttons/Outline";
import { Primary } from "shared/ui/Buttons/Primary";
import { DescriptionHeader, DescriptionText, H1, H2, H3, HelperText } from 'shared/ui/Text';

export const Home = () => {
    return (
        <View style={styles.container}>
            <H1>Header1</H1>
            <H2>Header2</H2>
            <H3>Header3</H3>
            <DescriptionHeader>Description header</DescriptionHeader>
            <DescriptionText>Description text</DescriptionText>
            <HelperText>Helper</HelperText>
            <Primary disabled={false} size="big" title="Click me!"/>
            <Primary disabled={false} size="small" title="Click me!"/>
            <Primary disabled={true} size="small" title="Click me!"/>
            <Outline disabled={false} size="big" title="Click me!"/>
            <Outline disabled={false} size="small" title="Click me!"/>
            <Outline disabled={true} size="small" title="Click me!"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });