import Header from "../Components/Header";
import ProjectBox from "../Components/ProjectBox";
import ProjectsHolder from "../Components/ProjectsHolder";
import "./projectsPage.css"

const projects = [
    {key: 0, title: "Fiat Cinquecento", image: "projekt.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra."}
    ,{key: 1, title: "Mega Projekt", image: "projekt.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra."}
    ,{key: 3, title: "Aparat 5D", image: "projekt.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra."}
    ,{key: 4, title: "Dłuuuuuuuuuuuuuuuuuugi tytuł bo taki sobie ktoś na pewno wymyśli!", image: "projekt.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra."}
]

export default function ProjectsPage()
{
    return (
        <>
            <Header />
            <div className="mainBody">
                <ProjectsHolder projects={projects} />
            </div>
        </>
    )
}