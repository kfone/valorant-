import React from 'react';
import { Card } from './Card';
import styles from './Content.module.scss';
import { Skill } from './Skill';

export const Content = () => {
const players = [
  {
    name: 'PHOENIX', 
    country: 'United Kingdom', 
    imageUrl: 'image/players/1.png',
    active: false
  },
  {name: 'JETT', country: 'South Korea', imageUrl: 'image/players/2.png', active: false},
  {name: 'SOVA', country: 'Russia', imageUrl: 'image/players/3.png', active: false},
  {name: 'SAGE', country: 'China', imageUrl: 'image/players/4.png', active: true},
];
const skills = [
  {skill: 'BASIC', title: 'Slow Orb', desc: 'Cast out a radianite orb that breaks into a slowing field upon impact with the ground.'},
  {skill: 'SIGNATURE', title: 'Healing Orb', desc: 'Heal an ally or yourself to full health over a few seconds.'},
  {skill: 'ULTIMATE', title: 'Resurrection', desc: 'Target a friendly corpse. After a short delay, revive them with full health.'}
]

  return (
    <div className={styles.content}>
      <div className={styles.column}>
        <div className={styles.main_content}>
          <div className={styles.left_content}>
            <span className={styles.title}>AGENTS</span>
          </div>
          <div className={styles.right_content}>
          {
            players.map((player, i) => {
              return <Card key={i} name={player.name} country={player.country} imageUrl={player.imageUrl} active={player.active} />
            })
          }
          </div>
        </div>
        <div className={styles.more_skills}>
        {
          skills.map((skill, i) => <Skill key={i} skill={skill.skill} title={skill.title} desc={skill.desc} />)
        }
        <div className={styles.more}>
          <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 9.5L0.499999 0.406732L0.5 18.5933L14 9.5Z" fill="#1F2326"/>
          </svg>
        </div>
        </div>
      </div>
      <div className={styles.bg_image}></div>
      <div className={styles.bg_color}></div>
    </div>
  )
}
