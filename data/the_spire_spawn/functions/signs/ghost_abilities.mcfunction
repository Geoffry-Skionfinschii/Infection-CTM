execute if score $ghost_abilities_enabled G_Settings matches 0 run data merge block ~-1 ~2 ~3 {Text1:'[{"text":"Ghost Abilities","clickEvent": {"action": "run_command","value": "/trigger SPWN_ClickSign set 3"}}]',Text2:'[{"text":"Disabled","color": "dark_blue"}]',Text4:'{"text":"R: Enabled"}'}
execute if score $ghost_abilities_enabled G_Settings matches 1 run data merge block ~-1 ~2 ~3 {Text1:'[{"text":"Ghost Abilities","clickEvent": {"action": "run_command","value": "/trigger SPWN_ClickSign set 3"}}]',Text2:'[{"text":"Enabled","color": "dark_blue"}]',Text4:'{"text":"R: Enabled"}'}