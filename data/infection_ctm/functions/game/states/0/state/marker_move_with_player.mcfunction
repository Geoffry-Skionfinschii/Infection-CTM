

execute store result entity @s Pos[0] double 1.0 run scoreboard players get $world_x_offset INF_StatusReg

execute at @s run tp @a[tag=SPAWN_PREVIEW_MP] ~ 100 ~
effect give @a[tag=SPAWN_PREVIEW_MP] levitation 100 255 true
effect give @a[tag=SPAWN_PREVIEW_MP] night_vision 100 255 true

schedule function infection_ctm:game/states/0/state/scheduled_return_player 5s