import React from 'react';

const useStyles = () => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  languagesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  languageContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  language: {
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    fontSize: 15,
    display: 'inline-block',
    fontWeight: 800
  },
  percentContainer: {
    width: 150,
    height: 12,
    border: '1px solid #000'
  },
  percent: {
    height: '100%'
  }
});

const Column = ({ theme, headlineText, languages }) => {
  const styles = useStyles();

  const getLanguages = () => {
    return languages.value.map((language) => {
      let percent = language.percent.value;
      if (percent > 100) {
        percent = 100;
      } else if (percent < 1) {
        percent = 0;
      }
      return (
        <div style={styles.languageContainer}>
          <div style={styles.language}>{language.languageName.value}</div>
          <div style={styles.percentContainer}>
            <div
              style={{
                ...styles.percent,
                backgroundColor: theme.value.color,
                width: `${percent}%`
              }}
            ></div>
          </div>
        </div>
      );
    });
  };

  return (
    <div style={styles.root}>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      <br />
      <div style={styles.languagesContainer}>{getLanguages()}</div>
    </div>
  );
};

export default Column;
