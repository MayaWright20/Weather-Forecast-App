import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../constants/COLORS';
import Screen from './Screen';
export default function LoadingOverlay(){
    return(
        <Screen buttonTitle={null} headerTitle='Loading...' onPress={null}>
            <ActivityIndicator size='large' color={COLORS.LIGHT_BLUE}/>
        </Screen>
    )
}
