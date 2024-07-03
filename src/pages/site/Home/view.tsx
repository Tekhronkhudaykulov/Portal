import { PieChart } from "@mui/x-charts";
import {
  CategoryIcon1,
  CategoryIcon2,
  CategoryIcon3,
  CategoryIcon4,
} from "../../../assets/icon";
import AddDocButton from "../../../components/button/addDocButton";

import SearchInput from "../../../components/searchInput/view";
import { Navbar } from "../../../layouts";
import Header from "../Header/view";
import CategoryCard from "./components/CategoryCard";
import { ProjectCard } from "./components/NewsCard";
import ChartCard from "./components/ChartCard";

const Home = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="bg-[#397FD5]">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <Header />
        <div className="flex items-center justify-center my-[40px]">
          <SearchInput />
        </div>
        <section>
          <div className="flex justify-between items-center">
            <p className="titleHome text-[30px] font-[700]">Категории</p>
            <AddDocButton title="Посмотреть все" />
          </div>
          <div className="grid grid-cols-4 gap-[20px] my-[30px]">
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
        </section>
        <section>
          <p className="titleHome text-[30px] font-[700]">
            Последние добавленные проекты
          </p>
          <div className="grid grid-cols-2 gap-[20px] my-[30px]">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        <section>
          <p className="titleHome text-[30px] font-[700] mb-[30px]">
            Последние предложения
          </p>
          <div className="grid grid-cols-2 gap-[20px] my-[30px]">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        <section>
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
        </section>
      </div>
    </div>
  );
};

export default Home;
