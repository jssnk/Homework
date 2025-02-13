package kr.eddi.demo.entity.vue.rpg;

import lombok.Getter;

@Getter
public class Monsters {
    private Integer monsterId;
    private String name;
    private Integer hp;
    private Integer exp;
    private Integer dropMoney;

    public Monsters(Integer monsterId, String name, Integer hp, Integer exp, Integer dropMoney) {
        this.monsterId = monsterId;
        this.name = name;
        this.hp = hp;
        this.exp = exp;
        this.dropMoney = dropMoney;
    }
}
