<template >
    <div class="login">
        <div class="message">系统登录</div>
        <div id="darkbannerwrap"></div>   
        <form method="post" class="layui-form" >
            <input name="account" placeholder="用户名"  type="text" lay-verify="required" class="layui-input" autocomplete="off">
            <hr class="hr15">
            <input name="password" lay-verify="required" placeholder="密码"  type="password" class="layui-input" autocomplete="off">
            <hr class="hr15">
            <input value="登录" lay-submit lay-filter="login" style="width:100%;" type="submit">
            <hr class="hr20" >
        </form>
    </div>
</template>