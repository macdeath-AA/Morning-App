// import { StyleSheet } from "react-native";

// import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

// const styles = StyleSheet.create({
//   container: (selectedJob, item) => ({
//     width: 250,
//     padding: SIZES.xLarge,
//     backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
//     borderRadius: SIZES.medium,
//     justifyContent: "space-between",
//     ...SHADOWS.medium,
//     shadowColor: COLORS.white,
//   }),
//   logoContainer: (selectedJob, item) => ({
//     width: 50,
//     height: 50,
//     backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
//     borderRadius: SIZES.medium,
//     justifyContent: "center",
//     alignItems: "center",
//   }),
//   logoImage: {
//     width: "70%",
//     height: "70%",
//   },
//   companyName: {
//     fontSize: SIZES.medium,
//     fontFamily: FONT.regular,
//     color: "#B3AEC6",
//     marginTop: SIZES.small / 1.5,
//   },
//   infoContainer: {
//     marginTop: SIZES.large,
//   },
//   jobName: (selectedJob, item) => ({
//     fontSize: SIZES.large,
//     fontFamily: FONT.medium,
//     color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
//   }),
//   infoWrapper: {
//     flexDirection: "row",
//     marginTop: 5,
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
//   publisher: (selectedJob) => ({
//     fontSize: SIZES.medium - 2,
//     fontFamily: FONT.bold,
//     color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
//   }),
//   location: {
//     fontSize: SIZES.medium - 2,
//     fontFamily: FONT.regular,
//     color: "#B3AEC6",
//   },
// });

// export default styles;



import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  articleContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Adds shadow for iOS
    shadowRadius: 4,
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
});

export default styles;
