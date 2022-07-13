import github from "../../assets/logo-horizontal.svg";

import { Link, useParams } from 'react-router-dom';

import { IoMdArrowBack } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import { MdHomeWork } from 'react-icons/md'
import { BsPeopleFill, BsPeople } from 'react-icons/bs'
import { TbGitFork } from 'react-icons/tb'


import ClipLoader from "react-spinners/ClipLoader";
import Card from '../../components/Card/index'

import './styles.scss'
import { useState, useEffect } from "react";

export default function () {
  const params = useParams().user;

  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState([]);
  const [user, setUser] = useState({
    name: '',
    avatar: '',
    login: '',
    location: '',
    company: '',
    followers: '',
    following: '',
    repos: '',
  });

  useEffect(() => {
    async function fetchData() {
      const repsonse = await fetch("https://api.github.com/users/" + params);
      const data = await repsonse.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url,
        login: data.login,
        location: data.location,
        company: data.company,
        followers: data.followers,
        following: data.following,
        repos: data.public_repos,
      });
    }

    fetchData();

  }, []);

  useEffect(() => {
    async function fetchDataRepo() {
      const repsonse = await fetch("https://api.github.com/users/" + params + " /repos");
      const dataRepo = await repsonse.json();
      setRepo(dataRepo);
    }

    fetchDataRepo();

  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  console.log(repo)

  return (
    <div className="container-search">

      {
        loading ?

          <div className="loading-div">
            <ClipLoader
              color={"#8752CC"}
              loading={loading}
              size={50} />
          </div>

          :

          <>
            <header>
              <img src={github} alt="imagem github" />
              <Link className="icon" to={"/"}><IoMdArrowBack /></Link>

            </header>

            <main>

              <div className="profile">
                <img src={user.avatar} alt="github profile" />

                <div className="infos">

                  <div className="name">
                    <strong>{user.name}</strong>
                    <small>@{user.login}</small>
                  </div>

                  <div className="git_infos">
                    <div className="first_line">
                      <p> <ImLocation className="icon" /> {user.location} </p>
                      <p> <MdHomeWork className="icon" /> {user.company} </p>
                    </div>
                    <div className="second_line">
                      <p> <BsPeopleFill className="icon" /> {user.followers} </p>
                      <p> <BsPeople className="icon" /> {user.following} </p>
                    </div>

                  </div>
                </div>

                <div className="total">
                  <p>Total Repositorios</p>
                  <p> <TbGitFork className="icon" /> {user.repos} </p>
                </div>
              </div>

              <div className="container-cards">

                {repo.map(item => (
                  <Card
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    forks={item.forks_count}
                    stars={item.stargazers_count}
                    language={item.language}
                    url={item.html_url}
                  />
                ))}

              </div>

            </main>
          </>
      }



    </div >
  )
}