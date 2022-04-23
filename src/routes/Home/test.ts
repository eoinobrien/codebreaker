import {
  createBrokenEncodedGameSettings,
  createCode,
  DEFAULT_GAME_SETTINGS,
  encodeGameSettings,
} from 'logic';

const createCodes = () => {
  let arr = [];

  for (let index = 0; index < 400; index++) {
    let settings = DEFAULT_GAME_SETTINGS;
    settings.isDaily = true;

    if (index % 10 === 0) {
      settings.allowDuplicates = true;
    }
    else {
      settings.allowDuplicates = false;
    }

    console.log(settings);

    arr.push(
      createBrokenEncodedGameSettings(
        encodeGameSettings(createCode(settings), settings),
      ),
    );
  }

  return arr;
};

export default createCodes;
