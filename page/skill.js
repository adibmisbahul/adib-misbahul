import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Angularicon from "../assets/image/angular.png";
import Tailwindicon from "../assets/image/tailwind.png";
import Typeicon from "../assets/image/typescript.png";
import Solid from "../assets/image/solid.png";
import Figma from "../assets/image/figma.png";
import Rust from "../assets/image/rust.jpeg";

const skill = () => {



  const skils = [
    { id: 1, nama: "Angular", image: Angularicon, deskrip: " adebbefb" },
    { id: 2, nama: "Tailwind", image: Tailwindicon, deskrip: " adebbefb" },
    { id: 3, nama: "Typescript", image: Typeicon, deskrip: " adebbefb" },
    { id: 4, nama: "Solid.js", image: Solid, deskrip: " adebbefb" },
    { id: 5, nama: "Figma", image: Figma, deskrip: " adebbefb" },
    { id: 6, nama: "Rust", image: Rust, deskrip: " adebbefb" },
  ];

  // const listitem = skill.maps()


  // const listItems = skils.map((popo)=>
  //    <li key={popo.id}>{popo.nama}</li>
  //   );

  return (
    <View>
      <Text style={styles.skilss}>skill</Text>
      <View style={styles.wrapskils}>
        {skils.map((object) => {
          return (
            <>
              <View style={styles.skils} key={object}>
                <Image
                  source={object.image}
                  style={styles.imageskils}
                />
                <Text>{object.nama} </Text>
              </View>
            </>
          );
        })}
      </View>
    </View>
  );
};

export default skill;

const styles = StyleSheet.create({
  skilss: {
    marginLeft: 35,
    marginTop: 20,
    fontWeight: "bold",
  },

  wrapskils: {
    width: 320,
    height: 150,
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 15,
    gap: 8,
    flexWrap: "wrap",
  },

  skils: {
    width: 95,
    height: 95,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    alignItems: "center",
  },

  imageskils: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
});
