using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AuthLibrary.Dto
{
   public class TokenDto
    {
        public string Token { get; set; }

        public userInfoDto UserInfo { get; set; }
    }
}
