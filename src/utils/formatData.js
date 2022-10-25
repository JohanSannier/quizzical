import { specialCharacters } from "./specialCharacters";

export const formatedData = (data) => {
  let tmpData = data;
  for (const specialCharacter of specialCharacters) {
    tmpData = tmpData.replace(specialCharacter.reg, specialCharacter.readable);
  }
  return tmpData;
};
