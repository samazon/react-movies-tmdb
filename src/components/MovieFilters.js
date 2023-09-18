import React from "react";

const MovieFilters = ({
  genres,
  onGenreChange,
  onRatingChange,
  selectedYear,
  onYearChange,
  onSortChange,
  onFilterButtonClick,
}) => {
  const handleFilterClick = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onFilterButtonClick(); // Call the filter button click handler
  };

  return (
    <div>
      <form onSubmit={handleFilterClick}>
        <div className="mb-4">
          <h2 className="mb-2">Sort By</h2>
          <select onChange={onSortChange}>
            <option value="">Select an option</option>
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
            <option value="primary_release_date.desc">
              Release date Descending
            </option>
            <option value="primary_release_date.asc">
              Release date Ascending
            </option>
            <option value="vote_average.desc">Rating Descending</option>
            <option value="vote_average.asc">Rating Ascending</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block">Genres:</label>
          {Array.isArray(genres) &&
            genres.map((genre) => (
              <label key={genre.id}>
                <input
                  type="checkbox"
                  value={genre.id}
                  onChange={onGenreChange}
                  className="mr-2"
                />
                <span className="mr-3">{genre.name}</span>
              </label>
            ))}
        </div>
        <p>Rating Filter</p>
        <div className="mb-4 ">
          <label className="mr-4">Rating:</label>
          {[5, 7, 9].map((rating) => (
            <label key={rating} className="mr-2">
              {rating}
              <input
                type="radio"
                name="rating"
                value={rating}
                onChange={onRatingChange}
                className="ml-2"
              />
            </label>
          ))}
        </div>
        {/* Year Filter */}
        <div>
          <label>Year:</label>
          <label>
            <input
              type="radio"
              value=""
              checked={!selectedYear}
              onChange={onYearChange}
            />
            All
          </label>
          {[2023, 2023, 2021].map((year) => (
            <label key={year}>
              <input
                type="radio"
                name="year"
                value={year}
                onChange={onYearChange}
              />
              {year}
            </label>
          ))}
        </div>
        <button
          className="p-2 bg-[#999] text-white rounded-lg mt-2"
          type="submit"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default MovieFilters;
