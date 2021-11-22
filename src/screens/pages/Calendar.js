import * as React from "react";
import { View , Text} from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarItem = () => {
    return(
        <View>
            <Calendar 
                horizontal={true} 
            />
        </View>
    )
}


export default CalendarItem;