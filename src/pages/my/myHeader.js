import React from "react"
import "./style.scss"
export default (props)=>{
    return (
    <div className="header">
    <div className="pic"><img alt="头像" src="data:image/png;base64,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UmVhZHlxyWU8AAADIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU2Njg2Njg2OEQwNjExRTZBOUNBODhEMkJCQTY2NTMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU2Njg2Njg3OEQwNjExRTZBOUNBODhEMkJCQTY2NTMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTY2ODY2ODQ4RDA2MTFFNkE5Q0E4OEQyQkJBNjY1MzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTY2ODY2ODU4RDA2MTFFNkE5Q0E4OEQyQkJBNjY1MzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5yEg3PAAAJ4klEQVR42uxdfWiOaxi/3g2z+f6ar2n5GiukNCX5a0WWkvzBSdSUOpE6zqFIESWKc5xapBRFC39oKRHlL2lqUT7HGMYY821svmbn+r27H73b8W7P+z73/dzX877Pr34907Tnee/fe9/3dV9fT6StrY0Eoog5hzmbOYs50sIzNDArmZeYF5lV0gYpIki8QuZcZrFijqBxamZeUDzPrA7Fa0cJc4G65pN81DHPME+ra9qJl8VczFykmEnBQyuzQvEk80s6iPcbcwlzIaUOTjFPMI+lqnjzmMuZyyh1Uc48yjyXKuIVMFcyS5m5lPpoZB5mHmLWBFk8zLRVyuxPN+B4cVDNxECJN565mvm7MJPfxhHjAHM/szYI4s1nrlXXEO04yyxTV7HiYaatU/tciI7A/rdXzURR4vVjrmduYGaHOsVFC3M3cw+zSYJ4ecyNzDWhNq6xj7mLWW9TPCyPm5krQj0SxhHmDi/HCS/iwZG8hbk01CFpHGdupyQd3cmKhxm3LRROm4Bbk5mByYiXp6Z7uFTqXUI3J7oHJioerMqdEo2Tr1+/0ocPH+jNmzf0/v17amlpoW/fvkV/l5mZSdnZ2dSvXz8aPHgw9e/fn3JyxPkOYMRsSsQKTVS8bWqfE4O3b99SfX09PX/+nL58cReV6dGjBw0dOpTy8vJoxIgRkj7OdrWEahcPB/B/pJzjPn36RPfv36cnT554+jtDhgyhgoKC6FXIOfBPtwd5t+LB1fWvFM8JBKuuro4ulbowbtw4mjx5MmVkZNj+eDBc/iAXrjQ34sHJXEZCfJUQrba21sjfxlI6Y8YM6tmzp+2PCeHgH671Kt7faipbx40bN6iurs7oPQYOHEgzZ86kXr162f642KL+8iLecrX+WjfN7t69S/fu3fPlXtj/ICCsVItoVnZG3HhgRjcH8VUShHvx4oVvwgGvX7+OflksI0eNf0Ey4iF1wXoEHOY/lku/8eDBA3r58qXtjz9H6ZCQeEgWKpWwz+E48PnzZ2vGkYC81lKlh2vxsNdZTxaCl+Tx48fW7g+PDZZsy8hVergSD3mVItLz4DlpbW21+gwPHz6UMBTLlC5diodM5iUSnhbLVUNDg/XnePfuXXQFEIAlSp+44iEFXUQmMwbs48eP1p8DM1+A4UJKl8VdibeIhADf+B8/foh4FhwdhGBRPPFKJIkHY0EKJKwAMeKV/Eo8lFmJqdZpbm4WI97379+lrAKZSqcO4hXGKiplwKQAwgkqQi1Rev0UDxWpQShsDNGu09xY8YqlPSGi3VKAGF8kEpE0PMWOeEUSxZOUY4L4noAgbWfxivBEcH6Ky8YZMGCAmGfp06ePuO82dIN4syUu7AiKWo6n/QQi7AIxG+LNkvhkTqqehL132LBhEodoFsQbSUIxatQo688waNAg6t27t8ThGZlBgjF69GjryUBjx44VOz6ixcvKyqL8/Hyrs07okilfPAD5lDaODTjXFRYWSjvfBUs8pOBNnTrV90GcMGFCtK5BMsSLB2DpQjazXxg+fHg0BV46kLfZRgGByWxpB5htyNmU5J5LCfEA5G+ayqlExdD06dMDIVwgxQNQznXr1i1tuSXwW06cODHKICGQ4gFIxsUsRMWQlwyz3NzcqGg4FgQNgRXPQVNTEz179ixK1Oy5tWBhlMAJINRvmR7iOcDsg5AoaUbyEtIonGg8HNxwcaGcGTMMPlMBVUCheOmMQIqH/Q4zCw0D4j1+50N9V//PaTggsMlAaogHyxJ1A42NjdEmAk6nB12AgFhOsRfCiJEUDA6seBAN5VZPnz7VWoPe5aDwbISI8KtKdpGJFu/Ro0fR44DbFh0mRERUY9KkSRLq1IMhHmbb9evXpdQIRHNYpk2bJqXdh1zxYOpfuXJFVMY0AC8MohtjxowJxfsVMNOuXr2q3RjRCUQ3EC4KxYvBq1evqKqqynoxZZAEFCEePCOVlZW+WZM6gOgDepeltXiwJC9fvhwVMEjAHoi4n03fqPVIOqzKoAkHoHLo2rVr1o4x1sVDsb6AbguejjQ2esRYFw/hmzt37lDQgcCw17aRgRIP2+zNmzcDYVm6AXJrbDT6sSIeAqdSvCc6ACvZRq8y38XDbKupqaFUAxr+wDvkt3i+dqpBOyq36QpBArYCn7+UDRCv0q+7IS1BSDsoI0CsEd3lfUIlxLvk191glUlzOOuefaaTgmNwCeLhDYvGRxSHWtMthqXMPh/2Puh1EeJVUfvL241/KEGdhIzOPhgvhgG9qjJi/mHcUEkXQDzDTvYLsUeF80xjaxr2OYR80gWIRxr8vHVKr5/i4RVgZ0zdDXuAlA5+fsGgz/aM0qvDIf00ztAm7iao5aFvMBQpaVU6UWfxoGiFiTtKar/oFwyFiipiV8iMX/xSO2x1Z7cJQ9tEB306i3eSeUr3HSW1XwwwTil94oqHuX7CxNknhGecUPrEFQ84xizXeVdhHfOCiHKlC3UnHoCXDzXqurPEVPEAoZHivAwqnnjnmId13b1v375pN+Iav7CHlR6uxQMOUbvT2jNQMpVu0PSFvah0oETFQ2TxIGmIOEA8Kb0z/YKGmoZmNf41yYjn7H0HvD4F6sElFWiYBoo0Naw2B6iLFx+6EQ/YTy5ePtsd0A4qaGXDyQA1fagm8rjSnFXjTl7FQ2i4rKvp6wbovoCX6QptPKpNuClTpnitpq1R491tSN7396QjIHv79u1ocDaVgDYhqKBFObQHGHlPuoNtzC06Pix6pSBsgozjINYqOHs59jYIhs6EGpwR25lbXc/0BMVDx+6dzDW6BgD3R7zPaX6Da2wDHCmIbcSDzvPoFgFqPM/tY25iNpkSD0BR2g7mChODhOdBCgEiESByPCEmijoQoYaoIP6f47nHz8n4T52Zgr0KP0MgEIKgLwuIenRc0TIZ4hly9R1hbmYmlPwSSdJpXKCW0KUUwiuOq6UyYYMw4sHjX6j2v1BAb8Jhn6tOyrr1GK4pUNN9RahDUkvlDi9HsIiGWBv2wI06jZg0AIyTXYnucSbEc6zQ9cwNXs+BKQ6c43Yz9yRiVZoWL/Ygv04tpyH+7znZSxp8xabEA+Yz16priHbAV1lGGnzEpsUDxjNXq5mYk8aiNauZBiez9vKhiOHkoOXMVdT+gsV0AwKpiMcdNXWDiA+ZXdj/VjJLmekQUofHHakLh8hjJEaCeA7mqZm4LIWFK1cz7ZwfN4tYyKn8jbmEuTCFRENCLPIqj/l504ilhNgs5mLmIsUgJrig6KNCEZnMvvexigjIZi5hLlDX/ACIhvo4FHucJoNlcUERzwEc3XOp/R3gxcKOGDD5LyiisLFawkNFhNYRFKnjBV4DjrdJ23gpMfrToM3JJWX2V0kbpP8EGAAryw2lHdFbMgAAAABJRU5ErkJggg=="/></div>
    <div className="logOrreg"><a>登录/注册</a></div>
    <div className="setting"><a>设置</a></div>
    <div className="set"></div>
    </div>
     )
}