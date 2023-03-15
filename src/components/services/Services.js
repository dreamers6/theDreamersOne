import React from 'react'
import { useState, useEffect } from 'react'
import { get_data } from './data/api'
import section2 from './data/sectio2data.json'
import Cards from './card_component/Cardssection1'
import './services_sections.css'
import Main from '../../Reusable-Component/Main '
import { Home } from 'react-feather'
import Cardssection2 from './card_component/Cardssection2'
import data from '../ourTeam/OurTeam.json'
import Card from '../ourTeam/card/Card'
import '../ourTeam/OurTeam.css'
import blog from '../blogs/Anass.json'
import { Link } from 'react-router-dom'
import { Calendar,ChevronRight} from 'react-feather'


export default function Section1() {

  const [data2, setdata2] = useState([])
  const [ourTeam, setOurTeam] = useState([])
  const [blogdata, setblogdata] = useState([])

  useEffect(() => {
    const fetchData = () => {
      const response3 = get_data(blog)
      const response2 = get_data(section2);
      const response1 = get_data(data)
      setblogdata(response3)
      setdata2(response2);
      setOurTeam(response1)
    };
    fetchData();
  }, []);


  return (
    <div className='services-area'>
      <div className='services-area-top main-banner'>
        <Main title={["Services", "services"]} router={'/'} icon={Home} />
      </div>

      <div className='services-area-cards'>
        <div className='services-section1 pb-5'>
          <div className='container'>
            <div className='row'>
              <Cards />
            </div>

          </div>
        </div>
        <div className='services-section2 pb-5'>
          <div className='container'>
            <div className='row'>
              {data2.map(item => {
                return (
                  <Cardssection2 number={item.number} title={item.title} text={item.text} second={item.second} key={item.id} />
                )
              })}
            </div>
          </div>
        </div>
        <div className='services-area-section3 services-area-sections  pb-5'>
          <div className='container ourTeam'>
            <div className='section-title text-center mb-4'>
              <h6>Our Doctor</h6>
              <h2>Meet Best Doctors</h2>
            </div>
            <div className='row justify-content-center'>
              {ourTeam.map((item, index) => {
                if (index < 3) {
                  return (
                    <Card key={item.id} id={item.id} imgPerson={item.imgPerson} name={item.name} specialist={item.specialist} twitter={item.twitter} linkeden={item.linkenden} instagram={item.instagram} />
                  )
                }
              })}
            </div>
          </div>
        </div>

        <div className='services-area-section4 services-area-sections pb-5'>
          <div className='container blog-section'>
            <div className='section-title text-center mb-4'>
              <h6>Latest News</h6>
              <h2>Our Latest News</h2>
            </div>

            <div className='row cards'>
              {blogdata.map((card, index) => {
                if (index < 3) {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5" id={"card"+index} key={card.id}>
                      <div className="card" key={card.id}>
                        <img src={card.image} className="card-img-top" alt={card.id} />
                        <div className="card-body">
                          <ul >
                            <li className='author'><Link><img src={card.smallImage} className="sm-img" alt="wow" /></Link> {card.author}</li>
                            <li className='date'><Calendar style={{ fontSize: "10px" }} /> {card.date}</li>
                          </ul>
                          <h4 className="card-title">{card.title}</h4>
                          <Link href="#" className="btn btn-sm">Read More<ChevronRight className='btn-icon ml-2' /></Link>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
