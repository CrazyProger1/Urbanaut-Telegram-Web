const ObjectItem = () => (
  <div className="bg-foreground rounded-2xl p-2 flex flex-row">
    <div className="min-w-fit">
      <img
        className="rounded-2xl size-24 shadow-shadow-first/50 shadow-frame"
        src="https://s.abcnews.com/images/Lifestyle/HT_abandoned_places_hotel_summer_jef_140620_22x15_1600.jpg?w=1600"
        alt="image-object"
      />
    </div>
    <div className="ml-4">
      <p className="text-text text-lg">Object name</p>
      <p className="text-text text-sm">
        Lorem ipsum. Lorem ipsum. Lorem ipsum.
      </p>
    </div>
  </div>
);

export default ObjectItem;
