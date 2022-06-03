import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import Article from './Article'

const publications = [
  {
    id: '104a21259e16',
    tags: [
      'interview',
      'coding-interviews',
      'faang-interview',
      'leetcode',
      'hackerrank'
    ],
    claps: 52,
    last_modified_at: '2022-02-15 17:18:17',
    published_at: '2022-02-15 07:28:05',
    url: 'https://adrian-td96.medium.com/what-ive-learned-after-one-month-of-doing-leetcode-hackerrank-problems-104a21259e16',
    image_url: 'https://miro.medium.com/0*76DOXx9iKQ98mQVL',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'What I’ve Learned After One Month of Doing Leetcode / HackerRank Problems',
    word_count: 619,
    reading_time: 3.1691823899371,
    voters: 13,
    topics: [
      'programming'
    ],
    subtitle: 'Most people looking for a Software Developer position are likely to know what sites like Leetcode and HackerRank are. A few months ago I…',
    author: '224bb12b307b'
  },
  {
    id: '13cb734eccda',
    tags: [
      'interview',
      'interview-preparation',
      'interview-tips'
    ],
    claps: 0,
    last_modified_at: '2022-02-08 17:35:20',
    published_at: '2022-02-08 16:59:21',
    url: 'https://adrian-td96.medium.com/how-to-prepare-for-conducting-a-coding-tinterview-13cb734eccda',
    image_url: 'https://miro.medium.com/0*-lipK1KVVFPd6Gyq',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'How to Prepare for Conducting a Coding/TInterview',
    word_count: 609,
    reading_time: 3.2481132075472,
    voters: 0,
    topics: [
      'work',
      'programming'
    ],
    subtitle: 'Technical and coding interviews are viewed as some of the most scary type of interviews, they test your knowledge on the spot and as a…',
    author: '224bb12b307b'
  },
  {
    id: '8e73fd51347a',
    tags: [
      'software-engineering',
      'interview-tips',
      'interview-preparation'
    ],
    claps: 3,
    last_modified_at: '2022-02-01 07:09:15',
    published_at: '2022-02-01 07:09:15',
    url: 'https://adrian-td96.medium.com/preparing-for-a-technical-interview-8e73fd51347a',
    image_url: 'https://miro.medium.com/0*XGDSNLR8EsXWfzda',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'Preparing for a Technical Interview',
    word_count: 618,
    reading_time: 3.1654088050314,
    voters: 2,
    topics: [
      'work',
      'programming'
    ],
    subtitle: 'If you are applying for a Software Engineering position, chances are that you’ll encounter some kind of technical interview or coding…',
    author: '224bb12b307b'
  },
  {
    id: '9ba37da8f43',
    tags: [
      'interview',
      'javascript',
      'javascript-tips'
    ],
    claps: 21,
    last_modified_at: '2022-01-25 15:24:02',
    published_at: '2022-01-25 15:01:12',
    url: 'https://adrian-td96.medium.com/javascript-interview-preparation-9ba37da8f43',
    image_url: 'https://miro.medium.com/0*TOyoLQv5awWru1f_',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'JavaScript Interview Preparation',
    word_count: 867,
    reading_time: 3.8216981132075,
    voters: 9,
    topics: [
      'javascript'
    ],
    subtitle: 'If you’re applying for a Software Engineer position, chances are you’ll encounter some technical interview or coding challenge. For junior…',
    author: '224bb12b307b'
  },
  {
    id: 'ba8652cb00d',
    tags: [
      'open-source',
      'contributing',
      'good-coding-practice'
    ],
    claps: 0,
    last_modified_at: '2022-01-18 06:13:30',
    published_at: '2022-01-18 05:57:07',
    url: 'https://adrian-td96.medium.com/what-i-learned-contributing-to-open-source-ba8652cb00d',
    image_url: 'https://miro.medium.com/0*IJreTbmSo-iPzPVo',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'What I Learned Contributing to Open-Source',
    word_count: 803,
    reading_time: 3.7301886792453,
    voters: 0,
    topics: [
      'programming'
    ],
    subtitle: 'One of the greatest challenges for someone starting out their journey into Software Development is getting experience. How do I get the job…',
    author: '224bb12b307b'
  },
  {
    id: 'd24c1bdb279f',
    tags: [
      'tutorial',
      'tutorial-hell',
      'software-development',
      'software-engineering',
      'problem-solving'
    ],
    claps: 6,
    last_modified_at: '2022-01-11 05:01:29',
    published_at: '2022-01-11 05:01:29',
    url: 'https://adrian-td96.medium.com/what-is-tutorial-hell-d24c1bdb279f',
    image_url: 'https://miro.medium.com/0*tA6VBvZnCu0qUc2S',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'What is “Tutorial Hell”?',
    word_count: 716,
    reading_time: 3.0852201257862,
    voters: 4,
    topics: [
      'programming'
    ],
    subtitle: 'As a self-taught programmer, I have done many tutorials, courses and bootcamps that I come across online. Usually when I finish a tutorial…',
    author: '224bb12b307b'
  },
  {
    id: '64ba0e668bb1',
    tags: [
      'solid-principles',
      'solid',
      'maintainable-code',
      'good-practices'
    ],
    claps: 1,
    last_modified_at: '2022-01-04 04:58:39',
    published_at: '2022-01-04 04:58:39',
    url: 'https://adrian-td96.medium.com/solid-principles-for-maintainable-code-64ba0e668bb1',
    image_url: 'https://miro.medium.com/0*kV2ZbmbQ6v_2gWQl',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'SOLID Principles for Maintainable Code',
    word_count: 825,
    reading_time: 4.0632075471698,
    voters: 1,
    topics: [
      'programming'
    ],
    subtitle: 'The SOLID principles were developed by Robert C. Martin in a 2000 essay, “Design Principles and Design Patterns”, although the acronym was…',
    author: '224bb12b307b'
  },
  {
    id: '3e6007c8e7f4',
    tags: [
      'oop',
      'object-oriented',
      'polymorphism',
      'encapsulation',
      'inheritance'
    ],
    claps: 4,
    last_modified_at: '2021-12-28 03:45:17',
    published_at: '2021-12-28 03:45:17',
    url: 'https://adrian-td96.medium.com/oop-for-dummies-3e6007c8e7f4',
    image_url: 'https://miro.medium.com/0*iXqrUTJHOpJhqMJv',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'OOP for Dummies',
    word_count: 818,
    reading_time: 4.1367924528302,
    voters: 2,
    topics: [
      'programming'
    ],
    subtitle: 'What is OOP?',
    author: '224bb12b307b'
  },
  {
    id: '1c0b4229b99f',
    tags: [
      'open-source',
      'git',
      'open-source-contribution',
      'communication-skills'
    ],
    claps: 1,
    last_modified_at: '2021-12-21 15:10:32',
    published_at: '2021-12-21 05:16:31',
    url: 'https://adrian-td96.medium.com/how-to-contribute-to-an-open-source-and-why-you-should-do-it-1c0b4229b99f',
    image_url: 'https://miro.medium.com/0*4ANTlROLvNTGAQ2z',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'How to Contribute to an Open Source (and Why You Should Do It!)',
    word_count: 812,
    reading_time: 3.6141509433962,
    voters: 1,
    topics: [
      'programming'
    ],
    subtitle: 'What is Open Source?',
    author: '224bb12b307b'
  },
  {
    id: 'a9c7978db54e',
    tags: [
      'command-line-interface',
      'command-line',
      'python',
      'argparse'
    ],
    claps: 2,
    last_modified_at: '2021-12-14 08:05:26',
    published_at: '2021-12-14 05:41:14',
    url: 'https://adrian-td96.medium.com/making-a-cli-application-in-python-a9c7978db54e',
    image_url: 'https://miro.medium.com/0*uUGf6jgTYs8lJnvP',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'Making a CLI Application in Python',
    word_count: 1036,
    reading_time: 4.9594339622642,
    voters: 2,
    topics: [
      'programming'
    ],
    subtitle: 'This past week I learned how to implement a CLI application so I thought about sharing this knowledge with you. But first, what is exactly…',
    author: '224bb12b307b'
  },
  {
    id: '4eecae32e194',
    tags: [
      'react',
      'react-hook',
      'react-props',
      'react-components'
    ],
    claps: 1,
    last_modified_at: '2021-12-07 01:09:25',
    published_at: '2021-12-07 01:09:25',
    url: 'https://adrian-td96.medium.com/how-to-pass-data-between-react-components-4eecae32e194',
    image_url: 'https://miro.medium.com/0*lgPWlZ2lsI1IV7mf',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'How to Pass Data Between React Components',
    word_count: 619,
    reading_time: 3.3858490566038,
    voters: 1,
    topics: [
      'javascript'
    ],
    subtitle: 'React is an open sourced JavaScript library maintained mainly by Facebook. In few years it has grow to be one of the most popular libraries…',
    author: '224bb12b307b'
  },
  {
    id: '308b97696c1a',
    tags: [
      'front-end-development',
      'react',
      'jsx',
      'components',
      'reactjs'
    ],
    claps: 1,
    last_modified_at: '2021-11-30 05:08:16',
    published_at: '2021-11-30 05:08:16',
    url: 'https://adrian-td96.medium.com/react-js-for-absolute-beginners-308b97696c1a',
    image_url: 'https://miro.medium.com/0*m-8oMdYUpO9E-o0U',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'React JS for Absolute Beginners',
    word_count: 677,
    reading_time: 3.1047169811321,
    voters: 1,
    topics: [
      'javascript'
    ],
    subtitle: 'What is React JS?',
    author: '224bb12b307b'
  },
  {
    id: '74325dce132d',
    tags: [
      'version-control',
      'git',
      'git-commands',
      'terminal'
    ],
    claps: 0,
    last_modified_at: '2021-11-23 06:23:36',
    published_at: '2021-11-23 05:53:20',
    url: 'https://adrian-td96.medium.com/git-commands-every-programmer-should-know-74325dce132d',
    image_url: 'https://miro.medium.com/0*i3AYZAQgM2jrmekr',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'Git Commands Every Programmer Should Know',
    word_count: 614,
    reading_time: 2.7003144654088,
    voters: 0,
    topics: [
      'programming'
    ],
    subtitle: 'What is Git?',
    author: '224bb12b307b'
  },
  {
    id: '4835646e20cf',
    tags: [
      'perception',
      'communication',
      'react',
      'front-end-development',
      'problem-solving'
    ],
    claps: 1,
    last_modified_at: '2021-11-16 01:24:24',
    published_at: '2021-11-16 01:24:24',
    url: 'https://adrian-td96.medium.com/the-importance-of-understanding-the-problem-4835646e20cf',
    image_url: 'https://miro.medium.com/0*EDR3eiq-I-BU1jAW',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'The Importance of Understanding the Problem',
    word_count: 602,
    reading_time: 2.6550314465409,
    voters: 1,
    topics: [
      'javascript',
      'programming'
    ],
    subtitle: 'What’s more important? Understanding the problem or finding the solution? Both parts are of utmost importance for solving a problem, many…',
    author: '224bb12b307b'
  },
  {
    id: '5cac81074f68',
    tags: [
      'testing',
      'test-driven-development',
      'chaos-engineering',
      'continuous-integration'
    ],
    claps: 0,
    last_modified_at: '2021-11-09 04:56:23',
    published_at: '2021-11-08 23:54:54',
    url: 'https://adrian-td96.medium.com/testing-and-chaos-engineering-5cac81074f68',
    image_url: 'https://miro.medium.com/0*lq7ejXU8YamQ4x0j',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'Testing and Chaos Engineering',
    word_count: 1203,
    reading_time: 5.3729559748428,
    voters: 0,
    topics: [
      'programming'
    ],
    subtitle: 'As development with Agile methodologies has gained momentum over the past decade and a half, the software development industry is…',
    author: '224bb12b307b'
  },
  {
    id: '5a66ce7ad0dc',
    tags: [
      'software-development',
      'software-engineering',
      'learning-to-code',
      'learning',
      'computers'
    ],
    claps: 10,
    last_modified_at: '2021-11-02 00:40:15',
    published_at: '2021-11-02 00:40:15',
    url: 'https://adrian-td96.medium.com/my-software-engineering-journey-month-1-5a66ce7ad0dc',
    image_url: 'https://miro.medium.com/0*nBpPzxWclAkmv7IJ',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'My Software Engineering Journey — Month 1',
    word_count: 2867,
    reading_time: 11.768867924528,
    voters: 5,
    topics: [
      'programming'
    ],
    subtitle: 'Having studied mechatronics, I didn’t know much about what software development was all about. When I graduated from university and began…',
    author: '224bb12b307b'
  },
  {
    id: '8b50ed2a2f98',
    tags: [
      'code',
      'hardware',
      'software',
      'review',
      'history'
    ],
    claps: 5,
    last_modified_at: '2021-11-01 22:18:22',
    published_at: '2021-10-31 23:36:36',
    url: 'https://adrian-td96.medium.com/code-the-hidden-language-of-computer-book-review-8b50ed2a2f98',
    image_url: 'https://miro.medium.com/1*mak5G0gDM68X3YLonUAwaQ.png',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'Code: The Hidden Language of Computer — Book Review',
    word_count: 1033,
    reading_time: 4.8481132075472,
    voters: 1,
    topics: [
      'programming',
      'technology'
    ],
    subtitle: 'Computers have become an integral part of our lives. They are the backbone of almost every business in the world, in fact some of the most…',
    author: '224bb12b307b'
  },
  {
    id: 'e5e0918f3461',
    tags: [
      'machine-learning',
      'quantum-computing',
      'unit-testing',
      'test-driven-development',
      'moonshot-thinking'
    ],
    claps: 15,
    last_modified_at: '2021-10-26 03:34:45',
    published_at: '2021-10-26 03:34:45',
    url: 'https://adrian-td96.medium.com/machine-learning-a-product-of-moonshot-thinking-e5e0918f3461',
    image_url: 'https://miro.medium.com/0*DZTHwf9DzRitkshu',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'Machine Learning: A Product of Moonshot Thinking',
    word_count: 1162,
    reading_time: 5.5182389937107,
    voters: 2,
    topics: [
      'artificial-intelligence',
      'machine-learning'
    ],
    subtitle: '“Shoot for the moon. Even if you miss, you’ll land among the stars.”',
    author: '224bb12b307b'
  },
  {
    id: '582092ec2186',
    tags: [
      'learning',
      'agile',
      'compression',
      'life-lessons',
      'software-development'
    ],
    claps: 3,
    last_modified_at: '2021-10-19 00:26:17',
    published_at: '2021-10-19 00:26:17',
    url: 'https://adrian-td96.medium.com/good-practices-for-software-engineering-teams-582092ec2186',
    image_url: 'https://miro.medium.com/0*_tno5ucXnfqGCbKk',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'Good Practices For Software Engineering Teams',
    word_count: 719,
    reading_time: 3.8465408805031,
    voters: 3,
    topics: [
      'programming'
    ],
    subtitle: 'You are always tired, you live waiting for it to be Friday, you feel that your boss enslaves you, you have no opportunity to grow…. If you…',
    author: '224bb12b307b'
  },
  {
    id: 'eb555fc197e6',
    tags: [
      'self-improvement',
      'learning-and-development',
      'life-hacking'
    ],
    claps: 5,
    last_modified_at: '2021-10-12 02:50:01',
    published_at: '2021-10-12 02:43:04',
    url: 'https://adrian-td96.medium.com/how-our-brain-works-and-how-to-take-advantage-of-it-to-become-a-better-developer-eb555fc197e6',
    image_url: 'https://miro.medium.com/0*gP4c_YU4HW2pbYUh',
    lang: 'en',
    publication_id: '*Self-Published*',
    title: 'How our Brain Works (and how to take advantage of it to become a better Developer)',
    word_count: 1291,
    reading_time: 5.4216981132075,
    voters: 3,
    topics: [
      'productivity'
    ],
    subtitle: 'Imagine that you are on a call with the client at the end of the day, they ask you if you can integrate a feature for the next week. Even…',
    author: '224bb12b307b'
  }
]

console.log(publications)

Modal.setAppElement('#root')

const base_url = 'https://medium2.p.rapidapi.com'
const userID = '224bb12b307b'

async function get_resp (endpoint) {
  const res = await axios.request({
    method: 'GET',
    url: base_url + endpoint,
    headers: {
      'X-RapidAPI-Host': 'medium2.p.rapidapi.com',
      'X-RapidAPI-Key': '20d837f198msh00910c39b7bfe2cp15e8c9jsn17201fdaa2a8'
    }
  })
  return res.data
}

const Publications = () => {
  const [articles, setArticles] = useState(publications)

  useEffect(() => {
    get_resp(`/user/${userID}/articles`).then(async function (data) {
      const articleIDs = data.associated_articles

      const retrievedArticles = await Promise.all(articleIDs.map(async (id) => {
        return get_resp(`/article/${id}`)
      }))
      setArticles(retrievedArticles)
    })
    console.log(articles)
  }, [])

  return (
    <div className='shane_tm_section' id='news'>
      <div className='shane_tm_news'>
        <div className='container'>
          <div className='shane_tm_title'>
            <span>Publication</span>
            <h3>Latest Blog Posts</h3>
          </div>

          <div className='news_list'>
            <ul>
              {articles.map((article, index) => {
                return (
                  <li key={article.id} data-aos='fade-right' data-aos-duration='1200'>
                    <Article article={article} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications
