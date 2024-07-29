import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className="bgImage ">
        <div className=" flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
          <h1 className="text-white font-bold text-5xl lg:text-6xl">
            Find Your Next <span className="text-white">Perfect</span>
            <br />
            Place With Ease
          </h1>
          <div className="text-white text-sm sm:text-sm">
            Square Yards is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
          </div>
          <Link
            to={"/search"}
            className="text-xs sm:text-sm text-white font-bold  "
          >
            <button className="butt  text-lg p-3 ">Get Started..</button>
          </Link>
        </div>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className=" max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="bg-gray-950">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-3xl font-semibold text-slate-600">
                Recent Places For Rent
              </h2>
              <Link
                className="text-sm text-white hover:underline"
                to={"/search?type=rent"}
              >
                <button className="butt  text-base p-1 mt-6 mb-6 ">
                  Show more
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Places For Sale
              </h2>
              <Link
                className="text-sm  text-white hover:underline"
                to={"/search?type=sale"}
              >
                <button className="butt  text-base p-1  mt-6 mb-6">
                  Show more
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className=" botom mt-40">
        <div className="left">
          <p className="text-2xl">About Square Yards</p>
          <p>
            Square Yards is a leading real estate agency that specializes in
            helping clients buy, sell, and rent properties in the most desirable
            neighborhoods. Our team of experienced agents is dedicated to
            providing exceptional service and making the buying and selling
            process as smooth as possible. Our mission is to help our clients
            achieve their real estate goals by providing expert advice,
            personalized service, and a deep understanding of the local market.
            Whether you are looking to buy, sell, or rent a property, we are
            here to help you every step of the way.
          </p>
          <p>
            Our team of agents has a wealth of experience and knowledge in the
            real estate industry, and we are committed to providing the highest
            level of service to our clients. We believe that buying or selling a
            property should be an exciting and rewarding experience, and we are
            dedicated to making that a reality for each and every one of our
            clients.
          </p>
        </div>
        <div className="right">
          <p className="text-lg">Properties in india</p>
          <p>
            Property in New Delhi | Property in Chennai | Property in Pune |{" "}
            <br />
            Property in Lonavala | Property in Gurgaon | <br /> Property in
            Banglore{" "}
          </p>
          <p className="text-lg"> New Projects in india</p>
          <p>
            Property in New Delhi | Property in Chennai | Property in Pune |{" "}
            <br />
            Property in Lonavala | Property in Gurgaon | <br /> Property in
            Banglore{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
