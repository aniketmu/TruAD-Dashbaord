export const sortByRating = (media) => {
    const sorted = media.sort((media1, media2) => media2.imdbRating - media1.imdbRating)
    const filtered = sorted.map((mediaItem) => ({
        ...mediaItem,
        Genre: mediaItem.Genre.split(", "),
      }));
    return filtered
}

export const sortByVotes = (media) => {
    const sorted = media.sort((media1, media2) => media2.imdbVotes - media1.imdbVotes);
    const filtered = sorted.map((mediaItem) => ({
        ...mediaItem,
        Genre: mediaItem.Genre.split(", "),
    }))

    return filtered
}

export const sortByScore = (media) => {
    const sorted = media.sort((media1, media2) => {
        const score1 = parseInt(media1.Metascore);
        const score2 = parseInt(media2.Metascore);

        // Handle cases where Metascore is missing or not a number (NaN)
        if (!isNaN(score1) && !isNaN(score2)) {
          return score2 - score1;
        } else if (!isNaN(score1)) {
          return -1; // Place media1 before media2
        } else if (!isNaN(score2)) {
          return 1; // Place media2 before media1
        } else {
          return 0; // Keep the order unchanged
        }
      });

      const filtered = sorted.map((mediaItem) => ({
        ...mediaItem,
        Genre: mediaItem.Genre.split(", "),
      }));

      return filtered
}