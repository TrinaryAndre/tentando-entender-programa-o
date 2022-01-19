using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class desafioenemyatacks : MonoBehaviour
{   
    int lifePlayer = 100, atackEnemy = 10, actuallyLifePlayer, damage;

    void Start()
    {
        actuallyLifePlayer = 50;
        damage = hitDamage(lifePlayer, atackEnemy, actuallyLifePlayer);
        Debug.Log(damage);
       
    }

    void Update()
    {
        
    }

    int hitDamage(int actuallyLifePlayer, int atackEnemy, int lifePlayer)
    {
        int hitDamage = (actuallyLifePlayer - lifePlayer) /atackEnemy;
        return(hitDamage);
        
    }

}

