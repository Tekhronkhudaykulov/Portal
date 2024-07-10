import {
  CategoryIcon1,
  CategoryIcon2,
  CategoryIcon3,
  CategoryIcon4,
  CloseIcon,
} from "../../../assets/icon";
import AddDocButton from "../../../components/button/addDocButton";

import SearchInput from "../../../components/searchInput/view";
import { Footer, Navbar } from "../../../layouts";
import Header from "../Header/view";
import CategoryCard from "./components/CategoryCard";
import { ProjectCard } from "./components/NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ASSETS } from "../../../assets/img";
import SliderCard from "../../../components/sliderCard/view";
import { modalsStore } from "../../../store";
import "./components/home.scss";

const Home = () => {
  const { modals, closeModal } = modalsStore();

  return (
    <div className="bg-[#f9f9f9]">
      <div className="bg-[#397FD5] ">
        <Navbar />
      </div>
      <div className={`menu ${modals?.CRUID && "active"}`}>
        <div
          onClick={() => closeModal("CRUID")}
          className="float-right cursor-pointer"
        >
          <CloseIcon />
        </div>
        <div className="flex flex-col mt-[100px] gap-y-[30px] ">
          <a href="" className="text-white text-[20px] font-[700]">
            Авторизация
          </a>
          <a href="" className="text-white text-[20px] font-[700]">
            Статистика
          </a>
          <a href="" className="text-white text-[20px] font-[700]">
            Часто задаваемые вопросы
          </a>
          <a href="" className="text-white text-[20px] font-[700]">
            Обратная связь
          </a>
        </div>
      </div>
      <div className="container mx-auto max-xl:pl-[10px] max-xl:pr-[10px]">
        <Header />
        <div className="flex items-center justify-center my-[40px]">
          <SearchInput />
        </div>
        <section>
          <div className="flex justify-between items-center">
            <p className="titleHome text-[30px] font-[700] max-xl:text-[25px]">
              Категории
            </p>
            <div className="max-xl:hidden">
              <AddDocButton title="Посмотреть все" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[20px] my-[30px] max-xl:grid max-xl:grid-cols-2">
            <CategoryCard
              title="Банковская деятельность"
              icon={<CategoryIcon1 />}
            />
            <CategoryCard
              title="Внешнеэкономическая деятельность. Таможенное дело"
              icon={<CategoryIcon2 />}
            />
            <CategoryCard
              title="Безопасность и охрана"
              icon={<CategoryIcon3 />}
            />
            <CategoryCard
              title="Гражданское законодательство"
              icon={<CategoryIcon4 />}
            />
            <CategoryCard
              title="Банковская деятельность"
              icon={<CategoryIcon1 />}
            />
            <CategoryCard
              title="Внешнеэкономическая деятельность. Таможенное дело"
              icon={<CategoryIcon2 />}
            />
            <CategoryCard
              title="Безопасность и охрана"
              icon={<CategoryIcon3 />}
            />
            <CategoryCard
              title="Гражданское законодательство"
              icon={<CategoryIcon4 />}
            />
          </div>
          <div className="max-xl:flex max-xl:justify-center">
            <AddDocButton title="Посмотреть все" />
          </div>
        </section>
        <section>
          <p className="titleHome text-[30px] font-[700] max-xl:text-[25px] max-xl:mt-[25px]">
            Последние добавленные проекты
          </p>
          <div className="grid grid-cols-2 gap-[20px] my-[30px] max-xl:grid max-xl:grid-cols-1">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        <section>
          <p className="titleHome text-[30px] font-[700] mb-[30px] max-xl:text-[25px]">
            Последние предложения
          </p>
          <div className="grid grid-cols-2 gap-[20px] my-[30px] max-xl:grid max-xl:grid-cols-1">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        {/* <section>
          <p className="titleHome text-[30px] font-[700] mb-[30px]">
            Статистика
          </p>
          <div className="grid grid-cols-2 gap-x-[20px]">
            <div>
              <p className="text-[18px] font-[600] mb-[20px]">ДИАГРАММА</p>
              <div className="bg-white p-[30px]">
                <PieChart
                  series={[
                    {
                      data: [
                        {
                          id: 0,
                          value: 10,
                          label: "Узбек тили ",
                          color: "#397FD5",
                        },
                        {
                          id: 1,
                          value: 15,
                          label: "Русс тили",
                          color: "#D9C55E",
                        },
                        {
                          id: 2,
                          value: 20,
                          label: "Англ тили",
                          color: "#2AC785",
                        },
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
            </div>
            <div>
              <p className="text-[18px] font-[600] mb-[20px]">
                СОЦИАЛЬНО ЗНАЧИМЫЕ ПРОЕКТЫ
              </p>
              <div className="flex gap-y-[20px] flex-col">
                <ChartCard />
                <ChartCard />
                <ChartCard />
                <ChartCard />
              </div>
            </div>
          </div>
        </section> */}
        <section className="">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              0: {
                slidesPerView: 2.5,
              },
            }}
            className="mySwiper "
          >
            <SwiperSlide>
              <SliderCard
                img={ASSETS.SliderImg}
                title="O'zbekiston Respublikasi Konstitutsiyasi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img={ASSETS.SliderImg2}
                title="O'zbekiston Respublikasi qonun hujjatlari ma'lumotlari milliy bazasi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img={ASSETS.SliderImg3}
                title="O'zbekiston Respublikasi hukumat portali"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img={ASSETS.SliderImg4}
                title="Taraqqiyot strategiyasi markazi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img={ASSETS.SliderImg4}
                title="Taraqqiyot strategiyasi markazi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img={ASSETS.SliderImg4}
                title="Taraqqiyot strategiyasi markazi"
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
      <div className="bg-[#397FD5] mt-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
