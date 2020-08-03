import { Dimensions } from "react-native";

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  button: {
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#ffffff",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    backgroundColor: "#ffffff"
  },
};
