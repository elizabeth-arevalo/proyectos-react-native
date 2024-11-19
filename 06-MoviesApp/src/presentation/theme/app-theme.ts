import { StyleSheet } from "react-native";

export const colors = {
    darkGray: "#2d2d2d",
    lightGray: "#9B9B9B",
    orange: "#FF9427",
    accent: "#FFB347",
    textPrimary: "#FFFFFF",
    textSecondary: "#BBBBBB",
    background: "#1a1a1a",
    cardBackground: "#333333",
    black: '#000'
};

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
    },

    loaderStyle: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: colors.background
    },

    actorConteiner: {
      marginRight: 10,
      marginLeft: 10,
      display: 'flex',
      flexDirection: 'column',
      width: 100
    },

    actorImage: {
      width: 100,
      height: 150,
      borderRadius: 10
    },

    actorInfo: {
      marginLeft: 10,
      marginTop: 4
    },

    backgroudCard: {
      color: colors.textPrimary,
      backgroundColor: colors.cardBackground
    },

    imagePoster: {
        flex: 1,
        borderRadius: 18,
    },

    imagePosterContainer: {
        flex: 1,
        backgroundColor: colors.cardBackground,
        borderRadius: 18,
        padding: 8,
        marginBottom: 16,
        shadowColor: colors.lightGray,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        borderColor: colors.orange,
        borderWidth: 1,
        elevation: 12,
    },

    textPrimary: {
        color: colors.textPrimary,
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: "center",
    },

    text: {
      color: colors.textPrimary,
      fontSize: 16,
      fontWeight: '600',
      textAlign: "justify",
  },

    textSecondary: {
        color: colors.textSecondary,
        fontSize: 14,
        textAlign: "center",
    },

    button: {
        backgroundColor: colors.orange,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        shadowColor: colors.accent,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },

    buttonText: {
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    imageContainer: {
        width: '100%',
        backgroundColor: colors.background,
        shadowColor: colors.lightGray,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
    
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
      },
    
      imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
      },
      posterImage: {
        flex: 1,
      },
    
      marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
      },
      subTitle: {
        fontSize: 16,
        opacity: 0.8,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 35,
        left: 10,
      },
      backButtonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
      },

});
