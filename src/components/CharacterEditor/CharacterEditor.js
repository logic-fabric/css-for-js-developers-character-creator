import { useState } from "react";

import { Character } from "../Character";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { ControlPane } from "../ControlPane";

import { DEFAULT_SKIN_COLOR, DEFAULT_CLOTHES_COLOR } from "../../constants";
import {
  bodyOptions,
  headOptions,
  faceOptions,
  accessoryOptions,
  skinColorOptions,
  clothesColorOptions,
} from "./CharacterEditor.helpers";

import styles from "./CharacterEditor.module.css";

export function CharacterEditor() {
  const [body, setBody] = useState(0);
  const [head, setHead] = useState(0);
  const [face, setFace] = useState(0);
  const [accessory, setAccessory] = useState(0);
  const [skinColor, setSkinColor] = useState(DEFAULT_SKIN_COLOR);
  const [clothesColor, setClothesColor] = useState(DEFAULT_CLOTHES_COLOR);

  return (
    <main className={styles.characterEditor}>
      <MaxWidthWrapper className={styles.maxWidthWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Create your Character</h1>

          <p className={styles.description}>
            Customize your character's look and style using the controls below.
            What sort of adventure will you embark on?
          </p>
        </header>

        <div className={styles.controlColumn}>
          <ControlPane
            title="Bodies"
            options={bodyOptions}
            currentOption={body}
            handleSelectOption={setBody}
          />

          <ControlPane
            title="Heads"
            options={headOptions}
            currentOption={head}
            handleSelectOption={setHead}
          />

          <ControlPane
            title="Faces"
            options={faceOptions}
            currentOption={face}
            handleSelectOption={setFace}
          />

          <ControlPane
            title="Accessories"
            options={accessoryOptions}
            currentOption={accessory}
            handleSelectOption={setAccessory}
          />

          <ControlPane
            title="Skin Color"
            options={skinColorOptions}
            currentOption={skinColor}
            handleSelectOption={setSkinColor}
          />

          <ControlPane
            title="Clothing Color"
            options={clothesColorOptions}
            currentOption={clothesColor}
            handleSelectOption={setClothesColor}
          />
        </div>

        <div className={styles.characterWrapper}>
          <Character
            body={body}
            head={head}
            face={face}
            accessory={accessory}
            skinColor={skinColor}
            clothesColor={clothesColor}
          />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
